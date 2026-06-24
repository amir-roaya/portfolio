import Projects from "@/components/Projects";
import { fistSkills, secondSkills } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="menu"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            fill="#230f3d"
            style={{ mixBlendMode: "multiply" }}
          />
          <path d="M21 4.5H3V6H21V4.5Z" fill="currentColor" />
          <path d="M21 18H3V19.5H21V18Z" fill="currentColor" />
          <path d="M21 9H3V10.5H21V9Z" fill="currentColor" />
          <path d="M21 13.5H3V15H21V13.5Z" fill="currentColor" />
        </symbol>

        <symbol
          id="close"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </symbol>

        <symbol
          id="html"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52"></path>
          <path fill="#ef652a" d="M256 472l149-41 35-394H256"></path>
          <path
            fill="#ebebeb"
            d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"
          ></path>
          <path
            fill="#fff"
            d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"
          ></path>
        </symbol>

        <symbol
          id="css"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 16 16"
        >
          <path
            fill="#2196F3"
            d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"
          ></path>
          <path
            fill="#FAFAFA"
            d="m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"
          ></path>
        </symbol>

        <symbol
          id="javascript"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" fill="#f7df1e" rx="15%"></rect>
          <path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"></path>
        </symbol>

        <symbol
          id="react"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 256 230"
        >
          <path d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"></path>
          <path
            fill="#53C1DE"
            d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"
          ></path>
          <path d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"></path>
          <path
            fill="#53C1DE"
            d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"
          ></path>
        </symbol>

        <symbol
          id="next-js"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
          ></path>
        </symbol>

        <symbol
          id="typescript"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#1677C7"
            d="M0 12v12h24V0H0v12zm14.563 7.626c.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.88.88 0 0 0 .314-.675l-.001-.047v.002c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.152 3.152 0 0 1-.653-1.178l-.006-.022c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053v.001c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967l-.001.037c0 .151.038.293.105.417l-.002-.005c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925a1.58 1.58 0 0 1 .22-.141zm-9.305-7.561c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012.011.979.008.983H10.59v8.876H8.38v-8.876H5.258v-.964z"
          ></path>
        </symbol>

        <symbol
          id="tailwind-css"
          xmlns="http://www.w3.org/2000/svg"
          fill="#0390fc"
        >
          <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
        </symbol>

        <symbol
          id="git"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" fill="#fff" rx="15%"></rect>
          <path
            fill="#f05133"
            d="M440.8 238.9L273 71.2a24.7 24.7 0 0 0-35 0l-34.8 34.9 44.2 44.1a29.4 29.4 0 0 1 37.2 37.5l42.5 42.5a29.4 29.4 0 1 1-17.6 16.6l-39.7-39.7v104.5a29.4 29.4 0 1 1-24.2-.9V205.3a29.4 29.4 0 0 1-16-38.6l-43.5-43.5-115 115a24.7 24.7 0 0 0 0 34.9L239 440.8a24.7 24.7 0 0 0 35 0l166.9-167a24.7 24.7 0 0 0 0-34.9"
          ></path>
        </symbol>

        <symbol
          id="github"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
        </symbol>

        <symbol
          id="postman"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#F36933"
            d="M18.855 6.049a.145.145 0 0 0-.053.159v-.001a.412.412 0 0 1-.054.45l.001-.001a.139.139 0 0 0-.03.087c0 .044.021.084.053.11a.143.143 0 0 0 .084.03c.042 0 .08-.02.106-.05a.69.69 0 0 0 .086-.752.138.138 0 0 0-.193-.032zM19.049 6.082l-.002-.004.001.003z"
          ></path>
          <path
            fill="#F36933"
            d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.588-3.801 13.429-10.374C24.745 6.955 20.102.943 13.527.099zm2.471 7.485a.851.851 0 0 0-.593.25l-4.453 4.453-.95-.95c4.389-4.376 5.181-4.418 5.996-3.753zm-4.863 4.861 4.44-4.44a.62.62 0 1 1 .848.902l-.001.001-4.699 4.125-.588-.588zm.33.694-1.1.238a.057.057 0 0 1-.013.001.06.06 0 0 1-.054-.033.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459 1.172-1.172.879.878-1.979.426a.11.11 0 0 1-.019.002.074.074 0 0 1-.066-.041.071.071 0 0 1-.011-.039c0-.021.009-.041.024-.054zm-3.646 6.057a.074.074 0 0 1-.069-.075v-.008a.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.426-1.255a.227.227 0 0 0-.117.258v-.002l.203.865a.125.125 0 0 1-.211.117h-.003l-1.228-1.229 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.278-3.428h-.002l-.839-.839 4.699-4.125a.985.985 0 0 0 .117-.125l.002-.002c-.147 1.345-2.029 3.245-3.977 5.091zm4.942-5.928a1.81 1.81 0 0 1-1.285-.532h.001l-.003-.002a1.822 1.822 0 0 1 2.461-2.681l-.003-.002-1.61 1.613a.117.117 0 0 0-.035.084c0 .033.013.063.035.084l1.247 1.247a1.801 1.801 0 0 1-.808.189zm1.294-.532c-.081.08-.169.151-.265.214l-.006.004h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522z"
          ></path>
        </symbol>

        <symbol
          id="demo"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </symbol>

        <symbol
          id="email"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path
            fill="currentColor"
            d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
          ></path>
          <path
            fill="currentColor"
            d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
          ></path>
          <path
            fill="currentColor"
            d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
          ></path>
        </symbol>

        <symbol
          id="phone"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <g>
            <g>
              <rect opacity="0"></rect>
              <path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22z"></path>
            </g>
          </g>
        </symbol>

        <symbol
          id="location"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"></path>
        </symbol>

        <svg
          id="telegram"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z"></path>
        </svg>
      </svg>

      <div className="container">
        <div className="mt-110 max-sm:mt-87.5 relative">
          <h1 className="text-5xl max-lg:text-4xl max-sm:text-2xl">
            Hello I Am
            <span className="text-text-color"> Amirhosein Aminroaya</span>
          </h1>

          <h4 className="mt-5 text-3xl max-lg:text-2xl max-sm:text-lg">
            Frontend Developer
          </h4>

          <p className="mt-10 max-w-1/2 text-xl max-lg:text-lg max-lg:max-w-2/3 max-sm:text-sm">
            Building modern web applications with React, Next.js, and passionate
            about learning, problem-solving, and building modern web
            applications.
          </p>

          <div className="shape"></div>
        </div>

        <main className="mt-170 max-sm:mt-110 w-full z-60">
          <section className="flex justify-center items-center mx-auto h-max">
            <div className="flex items-center justify-center w-[50%] h-full relative">
              <Image
                width={250}
                height={300}
                src={"/images/person.png"}
                alt={"Person"}
                className="w-62.5 h-75 max-sm:w-37.5 max-sm:h-50 max-[30rem]:w-25 max-[30rem]:h-37.5 hover:scale-110 transition-all"
                loading="eager"
              ></Image>
              <div className="image-chape"></div>
              <div className="image-shape-2"></div>
            </div>

            <div className="w-[50%]">
              <h2 className="titles">About Me</h2>

              <div className="text-lg flex flex-col gap-6 justify-center max-sm:text-sm max-[30rem]:text-xs">
                <p>
                  Im a Front-End Developer focused on building responsive and
                  user-friendly web applications with React and Next.js.
                </p>

                <p>
                  I enjoy turning ideas into clean, modern, and accessible
                  interfaces while continuously improving my skills and
                  exploring new technologies,
                </p>

                <p>My goal is to become a software engineer.</p>
              </div>
            </div>
          </section>

          <section className="mt-96 max-sm:mt-64">
            <h2 className="titles">My Skills</h2>

            <div className="overflow-hidden">
              <div className="flex items-center py-2 px-8 gap-40 max-lg:gap-20 max-sm:gap-15 whitespace-nowrap will-change-transform w-max animate-scroll max-lg:animate-scroll-lg max-sm:animate-scroll-sm">
                {[...fistSkills, ...fistSkills].map(({ title, svg }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-10 max-lg:gap-5 max-sm:gap-2 shrink-0 py-5 grayscale-85 max-sm:grayscale-0 hover:grayscale-0 hover:scale-105 main-transition"
                  >
                    <div>
                      <svg className="text-gray-400 max-sm:text-white group-hover:text-white main-transition">
                        <use href={`#${svg}`}></use>
                      </svg>
                    </div>

                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="flex items-center py-2 px-8 gap-40 max-lg:gap-20 max-sm:gap-15 whitespace-nowrap will-change-transform w-max animate-scroll-reverse max-lg:animate-scroll-lg-reverse max-sm:animate-scroll-sm-reverse">
                {[...secondSkills, ...secondSkills].map(
                  ({ title, svg }, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-10 max-lg:gap-5 max-sm:gap-2 shrink-0 py-5 grayscale-85 max-sm:grayscale-0 hover:grayscale-0 hover:scale-105 main-transition group"
                    >
                      <div>
                        <svg className="text-gray-400 max-sm:text-white group-hover:text-white main-transition">
                          <use href={`#${svg}`}></use>
                        </svg>
                      </div>

                      <span>{title}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </section>

          <section className="mt-96 max-sm:mt-64">
            <h2 className="titles">My Projects</h2>
            <Projects />
          </section>

          <section className="mt-96 max-sm:mt-64 mb-60">
            <h2 className="titles text-left">Contact</h2>

            <div className="flex flex-col justify-center gap-8">
              <p className="text-xl max-sm:text-[16px]">
                Feel free to reach out for collaborations, project inquiries, or
                just to say hello. Im always open to new opportunities.
              </p>

              <div className="flex flex-col gap-2 relative">
                <Link
                  href="mailto:amirhosein.aminiii@gmail.com"
                  className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[14px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition"
                >
                  <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                    <svg className="max-sm:w-5 max-sm:h-5">
                      <use href="#email"></use>
                    </svg>
                  </div>

                  <p>amirhosein.aminiii@gmail.com</p>
                </Link>

                <Link
                  href="tel:09127190994"
                  className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[16px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition"
                >
                  <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                    <svg className="max-sm:w-5 max-sm:h-5">
                      <use href="#phone"></use>
                    </svg>
                  </div>

                  <p>09127190994</p>
                </Link>

                <Link
                  href="https://github.com/amir-roaya"
                  className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[16px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition"
                >
                  <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                    <svg className="max-sm:w-5 max-sm:h-5">
                      <use href="#github"></use>
                    </svg>
                  </div>

                  <p>github.com/amir-roaya</p>
                </Link>

                <Link
                  href="https://t.me/amir_roayaa"
                  className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[16px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition"
                >
                  <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                    <svg className="max-sm:w-5 max-sm:h-5">
                      <use href="#telegram"></use>
                    </svg>
                  </div>

                  <p>Telegram</p>
                </Link>

                <div className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[16px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition">
                  <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                    <svg className="max-sm:w-5 max-sm:h-5">
                      <use href="#location"></use>
                    </svg>
                  </div>

                  <p>Iran, Tehran</p>
                </div>

                <div className="image-shape-2"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
