import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";

export default function Main(props) {
  return (
    <main className="relative">
      <CreateForm cookeHandler={props.cookeHandler} />
      {props.sotreData.length ? (
        <ReportTable sotreData={props.sotreData} sales={props.sales} />
      ) : (
        // lab38
        <h2 className="text-center">No Cookie Stands Available</h2>
      )}
    </main>
  );
}