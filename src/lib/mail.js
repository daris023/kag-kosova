const EMAIL = "daris.shala19@gmail.com";

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

export function getContactEmailProps(subject = "") {
  const mobile = isMobileDevice();

  if (mobile) {
    return {
      href: `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`,
    };
  }

  return {
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
      subject
    )}`,
    target: "_blank",
    rel: "noreferrer",
  };
}
