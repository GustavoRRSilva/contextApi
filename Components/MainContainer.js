import Navbar from "./Navbar";

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div>{children}</div>
    </>
  );
}
