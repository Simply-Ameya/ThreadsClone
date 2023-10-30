import ThreadCard from "@/components/cards/ThreadCard";
import { fetchThreads } from "@/lib/actions/thread.actions";
import User from "@/lib/models/user.model";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const result = await fetchThreads(1, 30);
  const user = await currentUser();

  return (
    <>
      {/* <UserButton afterSignOutUrl="/"/> */}
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.threads?.length === 0 ? (
          <p className="no-result">No Threads Found</p>
        ) : (
          <>
            {result.threads?.map((each) => (
              <ThreadCard
                key={each._id}
                id={each._id}
                currentUserId={user?.id}
                parentId={each.parentId}
                content={each.text}
                author={each.author}
                community={each.community}
                createdAt={each.createdAt}
                comments={each.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}