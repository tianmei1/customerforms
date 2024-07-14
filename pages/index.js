import CustomerForm from "../components/CustomerForm";

export default function Home() {
  return (
    <div>
      <div id="header">
        <h5>Alma'</h5>
        <div className="header-title">
          <h1>Get An Assessment Of Your Immigration Case</h1>
        </div>
      </div>

      <div className="form-header">
        <h2>Want to understand your visa options? </h2>
        <h3>
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your case
          based on your goals.
        </h3>
      </div>
      <div id="form">
        <CustomerForm />
      </div>
    </div>
  );
}
