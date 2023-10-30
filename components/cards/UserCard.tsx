"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: String;
  name: String;
  userName: String;
  imgUrl: string;
  personType: String;
}

const UserCard = ({ id, name, userName, imgUrl, personType }: Props) => {
  const router = useRouter();

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <Image
          src={imgUrl}
          width={48}
          height={48}
          className="rounded-full"
          alt="user photo"
        />
        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">@{userName}</p>
        </div>
      </div>

      <Button
        className="user-card_btn"
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
