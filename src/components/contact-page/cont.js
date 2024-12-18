import "../../assests/css/cont.css";
import TextField from "@mui/material/TextField";
import Check from "../../assests/img/check.svg";
import Button from "@mui/material/Button";
import Nav from "../navbar/nav";

function Con() {
  return (
    <>
      <div className="cont-sec mb-5">
        <div className="row cont-us justify-content-center">
          <div className="col-10 ">
            <h2 className="cont">CONTACT US</h2>
            <p className="cont-para mt-3">
              The first step we need to take is for us to understand your needs,
              so give us a way to reach out to you and let's get to work. Email
              us with any question or inquiries, or call +91 6300 399 054. We
              would be happy to answer your questions and set up a meeting with
              you.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="card cont-card mt-5">
              <div className="row justify-content-around">
                <div className="col-4">
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
              </div>

              <div className="row justify-content-around mt-5">
                <div className="col-4">
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
              </div>

              <div className="row justify-content-around mt-5">
                <div className="col-4">
                  <TextField
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="standard-basic"
                    label="Company"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
              </div>

              <div className="row justify-content-around mt-5">
                <div className="col-4">
                  <TextField
                    id="standard-basic"
                    label="Country"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
                <div className="col-4">
                  <TextField
                    id="standard-basic"
                    label="Inquiry Type"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
              </div>

              <div className="row justify-content-around mt-5">
                <div className="col-10">
                  <TextField
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                    className="cont-input"
                  />
                </div>
              </div>

              <div className="row justify-content-around mt-5">
                <div className="col-10">
                  <p className="check-para">
                    <img src={Check} className="check me-2" />
                    Click here to receive industry news and updates from Nexigo
                  </p>
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-4">
                  <Button variant="contained" className="msg-btn">
                    SEND MESSAGE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Con;
