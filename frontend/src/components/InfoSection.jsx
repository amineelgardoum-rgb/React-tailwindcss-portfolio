import { RevealOnScroll } from "./RevealOnScroll";

export const InfoSection = ({ title, items }) => {
  return (
    <RevealOnScroll>
    <div className="p-6 h-full rounded-xl shadow-[0px_2px_10px_green] hover:shadow-[0px_3px_40px_green] bg-black hover:-translate-y-2 transition-all ease-in-out duration-500 border border-green-500">
      <h3 className="text-xl font-bold mb-4 text-green-300">{title}</h3>
      <ul className="list-disc list-inside text-gray-300 space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.role}</strong>
            {item.details && (
              <span className="block text-sm text-gray-400">{item.details}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
    </RevealOnScroll>
  );
};
