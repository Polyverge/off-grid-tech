interface ProductConfiguratorHeadlines {
  children: React.ReactNode;
  className?: string;
}

function ProductConfiguratorHeadlineWrapper({
  children,
  className
}: ProductConfiguratorHeadlines) {
  return (<section id="headeline" className={`${className}`}>
    {children}
  </section>);
}


function ProductConfiguratorHeadlineMain({
  children,
  className,
}: ProductConfiguratorHeadlines) {
  return (<h2 className={`text-2xl font-bold ${className}`}>{children}</h2>);
}

function ProductConfiguratorHeadlineSecondary({
  children,
  className
}: ProductConfiguratorHeadlines) {
    return (<h3 className={`text-2lg ${className}`}>{children}</h3>);
}


export {
  ProductConfiguratorHeadlineWrapper,
  ProductConfiguratorHeadlineMain,
  ProductConfiguratorHeadlineSecondary,
};