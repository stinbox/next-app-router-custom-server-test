const Layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
