import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const MailChimp = () => {
  const postUrl = `https://dotcirclelabs.us8.list-manage.com/subscribe/post?u=${
    import.meta.env.VITE_APP_MAILCHIMP
  }&id=${import.meta.env.VITE_APP_MAILCHIMP_ID}`;
  // console.log("MailchimpSubscribe:", MailchimpSubscribe)
  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message, ...props }) => {
          // {console.log("props:", props)}
          // {console.log("subscribe:", subscribe)}
          return  <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
           
        }}
      />
    </div>
  );
};

export default MailChimp;
