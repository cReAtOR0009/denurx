import MailchimpSubscribe from "react-mailchimp-subscribe";
import { ProviderRegistrationForm } from "./ProviderForm";

const MailChimp2 = (
 { onBack,
  onSubmit,
  showBack,
  text}
) => {
  const postUrl = `https://denurx.us11.list-manage.com/subscribe/post?u=${
    import.meta.env.VITE_APP_MAILCHIMP
  }&id=${import.meta.env.VITE_APP_MAILCHIMP_ID}`;
  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message, ...props }) => {

          return (
            <ProviderRegistrationForm
              status={status}
              message={message}
              onBack={onBack}
              onSubmit={onSubmit}
              showBack={showBack}
              text={text}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
    </div>
  );
};

export default MailChimp2;
