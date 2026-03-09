import React, { useEffect, useState, useMemo } from 'react'
// import banner from "../assets/immigration/canada-banner.jpg"
import { Card, CardContent } from "../../components/ui/card"
import { CalendarDays, Loader2, MapPin } from "lucide-react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { server } from '../../redux/store'

export default function Marketplace() {
  const [tourData, setTourData] = useState([])
  const [loading, setLoading] = useState(false)

  // filters
  const [destination, setDestination] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [duration, setDuration] = useState("") // e.g. "1-3", "4-6", "7+"

  const getAllTours = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${server}/agent/servicesAll`);

      console.log(data,'ab');
      setTourData(data?.data || [])
    } catch (error)  {
      console.error("Failed to fetch tours", error)
    } finally {
      setLoading(false)
    }
  }

  const slugify = (str = "") => str.split(" ").join("-").toLowerCase()

  useEffect(() => {
    getAllTours()
  }, [])

  // Default card (for empty data)
  const defaultCard = {
    _id: "default1",
    title: "Goa Beach Escape",
    description: "A relaxing 3-day beach holiday with water sports, local tours, and luxury stays.",
    location: "Goa, India",
    price: 12999,
    durationInDays: 3,
    images: [{ url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }],
    createdAt: new  Date() 
  }

  const rawTours = tourData.length > 0 ? tourData : [defaultCard]

  // compute filtered list
  const filteredTours = useMemo(() => {
    return rawTours.filter((item) => {
      // destination filter (simple contains)
      if (
        destination &&
        !item.location?.toLowerCase().includes(destination.toLowerCase())
      ) {
        return false
      }

      // price filter
      if (minPrice && Number(item.price) < Number(minPrice)) return false
      if (maxPrice && Number(item.price) > Number(maxPrice)) return false

      // duration filter (assumes item.durationInDays)
      if (duration) {
        const d = Number(item.durationInDays || 0)
        if (duration === "1-3" && !(d >= 1 && d <= 3)) return false
        if (duration === "4-6" && !(d >= 4 && d <= 6)) return false
        if (duration === "7+" && !(d >= 7)) return false
      }

      return true
    })
  }, [rawTours, destination, minPrice, maxPrice, duration])

  const clearFilters = () => {
    setDestination("")
    setMinPrice("")
    setMaxPrice("")
    setDuration("")
  }

  return (
    <div>
      {/* Banner */}
      <div className="w-full">
        {/* <img
          src={banner}
          alt="Tour and Package Banner"
          className="w-full h-64 object-cover"
        /> */}
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Explore Our Latest Tour Packages
        </h2>

        {/* FILTER BAR (MakeMyTrip style basic) */}
        <div className="mb-6 p-4 bg-white border rounded-lg shadow-sm flex flex-wrap gap-4 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Destination</label>
            <input
              type="text"
              placeholder="Search city / country"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-48"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Min Price</label>
            <input
              type="number"
              placeholder="e.g. 5000"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-32"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Max Price</label>
            <input
              type="number"
              placeholder="e.g. 30000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-32"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-40"
            >
              <option value="">Any</option>
              <option value="1-3">1-3 days</option>
              <option value="4-6">4-6 days</option>
              <option value="7+">7+ days</option>
            </select>
          </div>

          <button
            onClick={clearFilters}
            className="ml-auto px-4 py-2 text-sm border rounded text-gray-700 hover:bg-gray-100"
          >
            Clear Filters
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin w-6 h-6 text-orange-600" />
          </div>
        ) : filteredTours.length === 0 ? (
          <p className="text-center text-gray-500">
            No tour packages match your selected filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((item) => (
              <Card key={item._id} className="shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 flex flex-col">
                  <img
                    src={item?.images?.[0]?.url || '/placeholder.jpg'}
                    alt={item?.title}
                    className="w-full h-48 rounded-md object-cover"
                  />

                  <div className="mt-3">
                    <Link to={`/tour/${slugify(item?.title)}`} state={{ id: item._id }}>
                      <h3 className="text-lg font-semibold text-gray-800 hover:text-orange-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                        {item.description}
                      </p>
                    </Link>

                    <div className="flex items-center text-xs text-gray-500 mt-2 gap-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <p className="text-sm font-semibold text-orange-600">
                        ₹{Number(item.price || 0).toLocaleString()} / person
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <CalendarDays className="w-4 h-4 text-orange-500" />
                        {new Date(item.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
