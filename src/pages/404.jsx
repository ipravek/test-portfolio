import { useRouter } from "next/router";

const NotFound = () => {

  const router = useRouter()
  console.log(router)
  return <>Not Found</>;
};

export default NotFound;
