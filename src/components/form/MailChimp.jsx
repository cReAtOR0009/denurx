import MailchimpSubscribe from "react-mailchimp-subscribe";
import { UserRegistrationForm } from "./UserRegistrationForm";

const MailChimp = ({
  onBack,
  onSubmit,
  // showBack,
  // onBack,
  // onSubmit,
  showBack,
  // text,
}) => {
  const postUrl = `https://denurx.us11.list-manage.com/subscribe/post?u=${
    import.meta.env.VITE_APP_MAILCHIMP
  }&id=${import.meta.env.VITE_APP_MAILCHIMP_ID}`;
  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message, ...props }) => {

          return (
            <UserRegistrationForm
              onBack={onBack}
              onSubmit={onSubmit}
              showBack={showBack}
              // text={text}
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
    </div>
  );
};

export default MailChimp;
