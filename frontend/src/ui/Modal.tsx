interface Props {
  children: any;
}

function Modal({ children }: Props) {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 content-center">
      <div className="w-96 max-w-full bg-latte-base dark:bg-mocha-base mx-auto px-8 py-6 rounded overflow-y-auto max-h-full">
        {children}
      </div>
    </div>
  );
}
export default Modal;
