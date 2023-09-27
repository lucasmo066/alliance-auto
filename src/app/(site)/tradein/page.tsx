

export default function Home() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between">
       <form className="flex flex-col items-center justify-center h-screen">
    <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
    </div>
    <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </div>
    </form>
        </div>
    );
  }