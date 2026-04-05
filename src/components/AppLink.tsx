type AppLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function AppLink({ href, children, ...props }: AppLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
