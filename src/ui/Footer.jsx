export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container-responsive py-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} BeautyMart. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-700" href="#">Privacy</a>
          <a className="hover:text-gray-700" href="#">Terms</a>
          <a className="hover:text-gray-700" href="#">Support</a>
        </div>
      </div>
    </footer>
  )
}


