import { withRouter } from "next/router";

const ActiveLink = ({
  router,
  href,
  children,
}: {
  router: any;
  href: any;
  children: any;
}) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  });

  const handleClick =
    () =>
    (e: React.MouseEvent<Element, MouseEvent>): void => {
      e.preventDefault();
      router.push(href);
    };

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          margin: 0,
          padding: 0,
          fontWeight: isCurrentPath ? "bold" : "bold",
          color: isCurrentPath ? "var(--primary-color-light)" : "none",
          borderBottom: isCurrentPath
            ? "2px solid var(--primary-color-light)"
            : "none",
          paddingBottom: "20px",
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default withRouter(ActiveLink);
