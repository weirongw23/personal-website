export function LinkItem({ href, children }) {
  return (
    <a
      href={href}
      className="font-bold underline decoration-sky-600 hover:bg-sky-400 hover:text-slate-100 hover:no-underline"
    >
      {children}
    </a>
  )
}
