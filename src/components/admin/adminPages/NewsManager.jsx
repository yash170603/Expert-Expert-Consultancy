

import { useState } from "react";

const initialNews = [
  {
    link: "https://zeenews.india.com/india/neet-pg-2023-result-released-at-nbe-edu-in-direct-link-steps-to-check-scorecard-cut-off-here-2583609.html",
    image: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/03/14/1167393-neet-pg-result.jpg",
    caption: "NEET PG 2023 Result RELEASED",
  },
  {
    link: "https://www.indiatoday.in/education-today/news/story/neet-pg-2023-result-20-candidates-score-over-700-this-year-vs-only-1-last-year-result-and-cut-off-comparison-2347574-2023-03-16",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/national-cancer-institute-nfvdkihxylu-unsplash-sixteen_nine.jpg",
    caption: "NEET PG 2023 Result: 20 candidates score over 700 this year vs only 1 last year",
  },
  {
    link: "https://bestcolleges.indiatoday.in/news-detail/neet-pg-2025-round-3-registration-and-choice-locking-closed-seat-allotment-on-january-21",
    image: "https://static-bestcolleges.tosshub.com/2025/News/AVTt807nIbc9S8E87EZmEmcvjTaKkGAKK9eiiFQA.png",
    caption: "NEET PG 2025 Round 3: Registration and choice-locking closed, seat allotment on January 21",
  },
  {
    link: "https://www.livemint.com/news/india/neetpg-2023-results-announced-today-here-s-how-to-check-11678800203746.html",
    image: "https://images.livemint.com/img/2023/03/14/600x338/f138b17e-2f8c-11ed-b360-96b459ca4506_1665392792935_1665392792935_1678800358915_1678800358915.jpg",
    caption: "NEET-PG 2023 results announced today. Here's how to check:",
  },
];

const NewsManager = () => {
  const [newsList, setNewsList] = useState(initialNews);
  const [currentNews, setCurrentNews] = useState({
    link: "",
    image: "",
    caption: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentNews((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrUpdateNews = () => {
    if (!currentNews.link.trim() || !currentNews.image.trim() || !currentNews.caption.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (isEditing && editIndex !== null) {
      setNewsList((prev) =>
        prev.map((item, index) => (index === editIndex ? currentNews : item))
      );
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setNewsList((prev) => [...prev, currentNews]);
    }

    setCurrentNews({ link: "", image: "", caption: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentNews(newsList[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setNewsList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-h-screen">
      <div className="flex h-full">
   

        {/* Right Section (Form and Table) */}
        <div className="flex-1 p-4">
        <div className="flex items-center justify-center h-[20px]">
  <h1 className="text-3xl font-bold">NEET NEWS MANAGER</h1>
</div>


          {/* Button to show/hide form */}
          <div className="flex justify-end">
  <button
    onClick={() => setShowForm(!showForm)}
    className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-6 hover:bg-blue-600 transition-all"
  >
    {showForm ? "Cancel" : "Add New News"}
  </button>
</div>
  

          {/* Add/Edit Form */}
          {showForm && (
            <div className="mb-6 p-6 border rounded-lg shadow-md bg-gray-100">
              <h2 className="text-lg font-semibold mb-4">
                {isEditing ? "Edit News" : "Add New News"}
              </h2>
              <div className="grid gap-4">
                <input
                  type="text"
                  name="link"
                  value={currentNews.link}
                  onChange={handleInputChange}
                  placeholder="News Link"
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  name="image"
                  value={currentNews.image}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  name="caption"
                  value={currentNews.caption}
                  onChange={handleInputChange}
                  placeholder="Caption"
                  className="border p-3 rounded-lg w-full"
                />
                <button
                  onClick={handleAddOrUpdateNews}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
                >
                  {isEditing ? "Update" : "Add"} News
                </button>
              </div>
            </div>
          )}

          {/* News List */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-blue-200 text-left">
                  <th className="px-6 py-4 min-w-[150px]">Image</th>
                  <th className="px-6 py-4 min-w-[300px]">News Link</th>
                  <th className="px-6 py-4 min-w-[300px]">Caption</th>
                  <th className="px-6 py-4 min-w-[150px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {newsList.map((news, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4">
                      <img
                        src={news.image}
                        alt={news.caption}
                        className="w-20 h-20 object-cover rounded-lg"
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
                    <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 mb-[0.5px]">
  <button
    onClick={() => handleEdit(index)}
    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-[100px] text-center"
  >
    Edit
  </button>
  <button
    onClick={() => handleDelete(index)}
    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-[100px] text-center"
  >
    Delete
  </button>
</div>


                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsManager;
