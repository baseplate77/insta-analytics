"use client";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Analytics = () => {
  let { id } = useParams();
  const searchParams = useSearchParams();

  const data = JSON.parse(searchParams.get("data") ?? "");

  const { avgLikes, avgComments } = (data["post_info"] as any[]).reduce(
    (acc, post, _, { length }: any) => ({
      avgLikes: acc.avgLikes + convertInstagramNumber(post.like_count)  / length,
      avgComments: acc.avgComments + convertInstagramNumber(post.comment_count) / length,
    }),
    { avgLikes: 0, avgComments: 0 }
  );
  const enageRate = (avgLikes + avgComments)/ convertInstagramNumber(data['follower_count']);
  console.log("data :", data, avgComments, avgLikes);
  useEffect(() => {}, [searchParams]);

  return (
    <div className="flex items-center justify-center bg-[url('/bg_image/bg1.png')] w-screen h-screen bg-no-repeat bg-fixed bg-cover">
      <div className="border backdrop-blur-lg  rounded-xl py-4 px-8 mx-4">
        <div className="font-bold text-2xl text-center">
          Instagram Report for {id}
        </div>
        <div className="flex flex-col sm:flex-row gap-8 py-4 ">
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src="https://instagram.fpnq7-6.fna.fbcdn.net/v/t51.2885-19/339863318_798083651202064_3322120079269210626_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fpnq7-6.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Rc_sMqEgi6IQ7kNvgENcgUR&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYD4U3SLXY_4fhwhzz2qc6u-1e2LuxFZ4VFJuTvHboGq6A&oe=66A57156&_nc_sid=8b3546"
              width={150}
              height={150}
              className="rounded-full"
              alt={`${id}`}
            />
            <div className="font-bold">@{id}</div>
          </div>
          <div>
            <div className="flex gap-4 justify-between bg-gray/50 border p-2 rounded-md">
              <div className="text-lg font-bold">
                Posts : {data["post_count"]}
              </div>
              <div className="text-lg font-bold">
                Followers : {data["follower_count"]}
              </div>
            </div>
            <div className="flex flex-col gap-4 px-6 py-6">
              <div className="flex justify-between">
                <Image
                  src={"/like.svg"}
                  width={30}
                  height={30}
                  alt="average likes"
                />
                <div className="font-bold">{Number(avgLikes.toFixed(1))}</div>
              </div>
              <div className="flex justify-between">
                <Image
                  src={"/comment.svg"}
                  width={30}
                  height={30}
                  alt="average comments"
                />
                <div className="font-bold">{Number(avgComments.toFixed(1))}</div>
              </div>
            </div>
            <div className="border-b-[1px] border-b-black mb-4" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <div className="font-bold">Engagement Rate</div>
                <div className="text-2xl font-black text-red-400">
                 {Number(enageRate.toFixed(1))}
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="font-bold">status</div>
                <div className="font-black text-2xl text-red-400">{"Low"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
