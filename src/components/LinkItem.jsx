export function LinkItem({ href, children }) {
  return (
    <a
      href={href}
      className="font-bold underline decoration-sky-400 hover:bg-sky-400 hover:text-slate-100 hover:no-underline"
    >
      {children}
    </a>
  )
}
