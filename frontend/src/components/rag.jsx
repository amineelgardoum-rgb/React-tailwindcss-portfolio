import { FaSearch, FaRegCommentDots } from 'react-icons/fa';
import { GiPencil } from 'react-icons/gi';

function RAGStep() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div>
        <FaSearch size={10} />
        <p>Retrieve</p>
      </div>
      <div>
        <GiPencil size={10} />
        <p>Generate</p>
      </div>
      <div>
        <FaRegCommentDots size={10} />
        <p>Answer</p>
      </div>
    </div>
  );
}
export default RAGStep;