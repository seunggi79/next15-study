import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Image src="/zlogo.png" alt="Logo" width={500} height={500} />

      </div>
      <div>
        <h1>
          지금 일어나고 있는일
        </h1>
        <h2>
          지금 가입하세요
          <button>
            <Link href={"/i/flow/signup"}>계정 만들기</Link>
          </button>
        </h2>
        <h3>
          이미 가입하셨나요?
          <button>
            <Link href={"/i/flow/login"}>로그하기기</Link>

          </button>
        </h3>
      </div>

    </div>
  );
}
