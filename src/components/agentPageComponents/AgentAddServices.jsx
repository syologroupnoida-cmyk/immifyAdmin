const AddServiceForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        location: "",
        price: "",
        description: ""
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AgentCreateServiceApi(formData));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-4">Add New Service</h3>
            <input
                placeholder="Service Title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-3 border rounded-lg mb-4"
            />
            <input
                placeholder="Category (Beach, Adventure, etc.)"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-3 border rounded-lg mb-4"
            />
            <input
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-3 border rounded-lg mb-4"
            />
            <input
                type="number"
                placeholder="Price (₹)"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                className="w-full p-3 border rounded-lg mb-4"
            />
            <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700"
            >
                Create Service
            </button>
        </form>
    );
};
