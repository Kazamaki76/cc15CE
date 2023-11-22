import ProductContent from './ProductContent';
import ProductHeader from './ProductHeader';

export default function ProductItem ({ postObj,deletePost }) {
  return (
    <div className="bg-white px-4 pt-3 border shadow rounded-lg">
      <ProductHeader postObj={postObj} deletePost={deletePost} />
      <ProductContent message={postObj.message} image={postObj.image} />
      
    </div>
  );
}




