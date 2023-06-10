import AddTaks from "./AddTaks";
import TaksList from "./TaksList";
import "./css/style.css";
import Table from "react-bootstrap/Table";

const Utama = () => {
  return (
    <div>
      <h1>Jadwal Kegiatan Harian</h1>

      <AddTaks />

      <div className="d-flex justify-content-center">
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "60px",
            width: "90%",
          }}
        >
          <thead>
            <tr>
              <th>Check</th>
              <th>Kegiatan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <TaksList />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Utama;
