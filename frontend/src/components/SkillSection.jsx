export const SkillSection = ({ title, items, renderIcons }) => (
  <div>
    <h3 className="text-xl font-bold mb-4 text-green-300">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {renderIcons(items)}
    </div>
  </div>
);
