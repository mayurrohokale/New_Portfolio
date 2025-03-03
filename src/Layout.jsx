import Header from "./Pages/Header";
export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
    </div>
  );
}
