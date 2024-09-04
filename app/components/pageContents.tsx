export function PageContents({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div className="flex flex-col gap-20 md:my-32 md:mx-20 mx-6 z-0 my-16">
            {children}
        </div>
    )
  }