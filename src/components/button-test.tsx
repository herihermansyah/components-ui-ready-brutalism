import React from "react";
import Button from "./ui/button";
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

const ButtonTest = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 gap-y-20 border-5 rounded-xl shadow-drop-tangerine bg-teal-300 border-denim-800 py-20 px-5">
      <div className="flex flex-col items-center gap-2">
        <h1 className="border-b-2 border-black">Parimary Color</h1>
        <PrimaryVariants />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="border-b-2 border-black">Secondary Color</h1>
        <SecondaryVariants />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="border-b-2 border-black">Tertiary Color</h1>
        <TertiaryVariants />
      </div>
    </div>
  );
};

const PrimaryVariants = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {/* small size */}
      <div className="flex flex-col items-center gap-3">
        <h2>Size Small</h2>
        <div className="flex gap-4">
          <Button>LABEL</Button>
          <Button iconRight={<FaArrowRight />} iconLeft={<FaArrowLeft />}>
            LABEL
          </Button>
          <Button disabled>LABEL</Button>
        </div>
        <div className="flex gap-4">
          <Button variant={"outline"}>LABEL</Button>
          <Button
            variant={"outline"}
            iconRight={<FaArrowRight />}
            iconLeft={<FaArrowLeft />}
          >
            LABEL
          </Button>
          <Button variant={"outline"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant={"ghost"}>LABEL</Button>
          <Button
            variant={"ghost"}
            iconRight={<FaArrowRight />}
            iconLeft={<FaArrowLeft />}
          >
            LABEL
          </Button>
          <Button variant={"ghost"} disabled>
            LABEL
          </Button>
        </div>
      </div>
      {/* large size */}
      <div className="flex flex-col items-center gap-3">
        <h2>Size large</h2>
        <div className="flex gap-4">
          <Button size={"large"}>LABEL</Button>
          <Button size={"large"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button size={"large"} variant={"outline"}>
            LABEL
          </Button>
          <Button size={"large"} variant={"outline"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button size={"large"} variant={"ghost"}>
            LABEL
          </Button>
          <Button size={"large"} variant={"ghost"} disabled>
            LABEL
          </Button>
        </div>
      </div>
    </div>
  );
};

const SecondaryVariants = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {/* small size */}
      <div className="flex flex-col items-center gap-3">
        <h2>Size Small</h2>
        <div className="flex gap-4">
          <Button color={"secondary"}>LABEL</Button>
          <Button
            color={"secondary"}
            iconRight={<FaArrowRight />}
            iconLeft={<FaArrowLeft />}
          >
            LABEL
          </Button>
          <Button color={"secondary"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color={"secondary"} variant={"outline"}>
            LABEL
          </Button>
          <Button
            color={"secondary"}
            variant={"outline"}
            iconRight={<FaArrowRight />}
            iconLeft={<FaArrowLeft />}
          >
            LABEL
          </Button>
          <Button color={"secondary"} variant={"outline"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color={"secondary"} variant={"ghost"}>
            LABEL
          </Button>
          <Button
            color={"secondary"}
            variant={"ghost"}
            iconRight={<FaArrowRight />}
            iconLeft={<FaArrowLeft />}
          >
            LABEL
          </Button>
          <Button color={"secondary"} variant={"ghost"} disabled>
            LABEL
          </Button>
        </div>
      </div>
      {/* large size */}
      <div className="flex flex-col items-center gap-3">
        <h2>Size large</h2>
        <div className="flex gap-4">
          <Button color={"secondary"} size={"large"}>
            LABEL
          </Button>
          <Button color={"secondary"} size={"large"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color={"secondary"} size={"large"} variant={"outline"}>
            LABEL
          </Button>
          <Button
            color={"secondary"}
            size={"large"}
            variant={"outline"}
            disabled
          >
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color={"secondary"} size={"large"} variant={"ghost"}>
            LABEL
          </Button>
          <Button color={"secondary"} size={"large"} variant={"ghost"} disabled>
            LABEL
          </Button>
        </div>
      </div>
    </div>
  );
};

const TertiaryVariants = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {/* small size */}
      <div className="flex flex-col items-center gap-3">
        <h2>Size Small</h2>
        <div className="flex gap-4">
          <Button color={"tertiary"}>LABEL</Button>
          <Button
            color={"tertiary"}
            iconRight={<FaArrowRight />}
            iconLeft={<FaArrowLeft />}
          >
            LABEL
          </Button>
          <Button color={"tertiary"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color={"tertiary"} variant={"outline"}>
            LABEL
          </Button>
          <Button
            color={"tertiary"}
            variant={"outline"}
            iconRight={<FaArrowRight />}
            iconLeft={<FaArrowLeft />}
          >
            LABEL
          </Button>
          <Button color={"tertiary"} variant={"outline"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color={"tertiary"} variant={"ghost"}>
            LABEL
          </Button>
          <Button
            color={"tertiary"}
            variant={"ghost"}
            iconRight={<FaArrowRight />}
            iconLeft={<FaArrowLeft />}
          >
            LABEL
          </Button>
          <Button color={"tertiary"} variant={"ghost"} disabled>
            LABEL
          </Button>
        </div>
      </div>
      {/* large size */}
      <div className="flex flex-col items-center gap-3">
        <h2>Size large</h2>
        <div className="flex gap-4">
          <Button color={"tertiary"} size={"large"}>
            LABEL
          </Button>
          <Button color={"tertiary"} size={"large"} disabled>
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color={"tertiary"} size={"large"} variant={"outline"}>
            LABEL
          </Button>
          <Button
            color={"tertiary"}
            size={"large"}
            variant={"outline"}
            disabled
          >
            LABEL
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color={"tertiary"} size={"large"} variant={"ghost"}>
            LABEL
          </Button>
          <Button color={"tertiary"} size={"large"} variant={"ghost"} disabled>
            LABEL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonTest;
