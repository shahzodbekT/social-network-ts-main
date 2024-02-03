import { Post } from "../../components/Post/Post";
import { Loader } from "../../components/UI/Loader/Loader";
import { useGetPostListItemQuery } from "../../store/Api/postApi";
import { useParams } from "react-router-dom";

type PostPageProps = {};

export const PostPage = () => {
  const { postId } = useParams();
  const {
    data: postItem,
    isError,
    isSuccess,
    isLoading,
  } = useGetPostListItemQuery(postId as string);

  const handleEditPost = () => {};

  return (
    <div className="MainPage">
      <main className="Main">
        {isError && <h1>Произошла ошибка!</h1>}
        {isLoading && <Loader />}
        {isSuccess && (
          <Post post={postItem.message} handleEditPost={handleEditPost} />
        )}
      </main>
    </div>
  );
};
