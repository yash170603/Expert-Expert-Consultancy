import { useState, useEffect } from "react";
import axios from "axios";

const NewsManager = () => {
  const [newsList, setNewsList] = useState([]);
  const [currentNews, setCurrentNews] = useState({
    link: "",
    image: "",
    caption: "",
    category: "Neet UG",
  });
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // ✅ Fetch news from backend
  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/news/all"
        );
        setNewsList(response.data.news);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    loadNews();
  }, []);

  // ✅ Add or Update News
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(
          `http://localhost:3000/api/admin/news/${editId}`,
          currentNews
        );
        setNewsList((prev) =>
          prev.map((news) =>
            news._id === editId ? { ...news, ...currentNews } : news
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:3000/api/admin/news/add",
          currentNews
        );
        setNewsList([response.data.news, ...newsList]); // Add new news to the top
      }

      setCurrentNews({ link: "", image: "", caption: "", category: "Neet UG" });
      setShowForm(false);
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      console.error("Error submitting news:", error);
    }
  };

  // ✅ Delete News
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/admin/news/${id}`);
      setNewsList((prev) => prev.filter((news) => news._id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  // ✅ Edit News
  const handleEdit = (news) => {
    setCurrentNews(news);
    setEditId(news._id);
    setIsEditing(true);
    setShowForm(true);
  };

  return (
    <div className="w-full max-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">NEET NEWS MANAGER</h1>

      {/* Add News Button (Right-Aligned) */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setShowForm(!showForm);
            setIsEditing(false);
            setCurrentNews({
              link: "",
              image: "",
              caption: "",
              category: "Neet UG",
            });
          }}
          className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all"
        >
          {showForm ? "Close " : "Add News"}
        </button>
      </div>

      {/* Add/Edit News Form (Toggles Visibility) */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 shadow-md rounded-lg mb-6"
        >
          <input
            type="text"
            placeholder="News Link"
            value={currentNews.link}
            onChange={(e) =>
              setCurrentNews({ ...currentNews, link: e.target.value })
            }
            className="block w-full border p-2 rounded mb-2"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={currentNews.image}
            onChange={(e) =>
              setCurrentNews({ ...currentNews, image: e.target.value })
            }
            className="block w-full border p-2 rounded mb-2"
            required
          />
          <input
            type="text"
            placeholder="Caption"
            value={currentNews.caption}
            onChange={(e) =>
              setCurrentNews({ ...currentNews, caption: e.target.value })
            }
            className="block w-full border p-2 rounded mb-2"
            required
          />
          <select
            value={currentNews.category}
            onChange={(e) =>
              setCurrentNews({ ...currentNews, category: e.target.value })
            }
            className="block w-full border p-2 rounded mb-2"
            required
          >
            <option value="Neet UG">Neet UG</option>
            <option value="Neet PG">Neet PG</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            {isEditing ? "Update News" : "Add News"}
          </button>
        </form>
      )}

      {/* News List (Scrollable Table) */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="table-auto w-full">
            <thead className="bg-blue-200 sticky top-0">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">News Link</th>
                <th className="px-6 py-4">Caption</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsList.map((news) => (
                <tr key={news._id} className="border-t">
                  <td className="px-6 py-4">
                    <img
                      src={news.image}
                      className="w-20 h-20 object-cover rounded-lg"
                      alt="News"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {news.link}
                    </a>
                  </td>
                  <td className="px-6 py-4">{news.caption}</td>
                  <td className="px-6 py-4">{news.category}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(news)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(news._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {newsList.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 p-4">
                    No news available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsManager;
