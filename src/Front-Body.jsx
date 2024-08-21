export function FrontBody() {
  return (
    <div>
      <div className="flex flex-col items-center">
  <h1 className="text-5xl font-bold">Welcome to GreenLoop Test Website</h1>
  <p className="text-sm text-gray-500 italic mt-2 text-center">
    This website is a demo and is intended for testing purposes only. All
    content is fictional and should not be taken as real.
  </p>
</div>

      <main className="flex border py-28 justify-center flex-wrap">
        <div className="bg-purple-400 p-20"></div>
        <div className="bg-green-400 p-20"></div>
      </main>
      <div className="flex justify-center">
        <body className="bg-purple-700 p-32">
          BODY TEST BODY TEST BODY TEST BODY TEST BODY TEST BODY TEST{" "}
        </body>
      </div>
    </div>
  );
}
