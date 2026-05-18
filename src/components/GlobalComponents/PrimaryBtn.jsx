const PrimaryBtn = ({ text }) => {
  return (
    <div>
      <button className=" text-white border-t border-b border-white px-6 py-3 font-semibold uppercase tracking-wide bg-transparent">
        {text}
      </button>
    </div>
  );
};

export default PrimaryBtn;