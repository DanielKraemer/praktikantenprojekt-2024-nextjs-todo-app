import { useFormStatus } from "react-dom"
import {
  DocumentCheckIcon
} from '@heroicons/react/16/solid';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return <button
      type="submit"
      disabled={pending}
      className="
        mt-4
        hover:spedionorange
        text-white
        font-semibold
        hover:text-spedionorange
        py-2
        px-4
        border
        border-white
        hover:border-spedionorange
        rounded
        w-full
        disabled:text-gray-700
        disabled:border-gray-700
      "
    >
      <DocumentCheckIcon className="h-5 w-5 inline-block text mr-1 -mt-1" />
      Save
    </button>
}