const Login = () => {
  return (
    <div className="flex-grow flex justify-center w-[100vw] h-[80vh] items-center gap-8 ">
      <div className="border border-[#e2e2e2] dark:border-[#1c1c1c] rounded-2xl py-10 px-12 flex flex-col justify-start items-start gap-7">
        <h1 className="text-3xl text-white">Login</h1>
        <input
          type="email"
          className="bg-transparent rounded-[8px] text-[white] w-[20vw]"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          className="bg-transparent rounded-[8px] text-[white] w-[20vw]"
          placeholder="Enter Your Password"
        />
        <div className="flex justify-center items-center w-full">
          <button className="bg-gradient-to-r from-[#628EFF] to-[#580475] rounded-[20px] text-[white] w-[100%] h-[4vh]  hover:bg-[#0F977E]">
            Login
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 w-full">
            <div className="border-b border-[grey] w-[8vw]"></div>
            <div className="text-[grey]">Or</div>
            <div className="border-b border-[grey] w-[8vw]"></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
