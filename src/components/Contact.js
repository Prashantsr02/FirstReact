const Contact = () => {
  return (
    <div>
      <h1 className="font-bold font-sans p-4 m-4 text-3xl">CONTACT US</h1>
      <form>
        <input
          placeholder="Name"
          className="m-4 p-2 border-2 border-black"
        ></input>
        <input
          placeholder="Message"
          className="m-2 p-2 border-2 border-black"
        ></input>
        <button className="m-2 p-2 border border-black cursor-pointer bg-gray-100 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
