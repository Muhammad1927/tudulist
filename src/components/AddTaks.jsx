import Button from "react-bootstrap/Button";

const AddTaks = () => {
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-9">
          <input
            style={{ width: "90%", padding: "13px 8px" }}
            placeholder="Tambahkan Kegiatan Anda"
          />
        </div>
        <div className="col-2">
          <Button
            style={{ padding: "15px 25px", marginLeft: "0px" }}
            variant="primary"
          >
            Tambah Kegiatan
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddTaks;
