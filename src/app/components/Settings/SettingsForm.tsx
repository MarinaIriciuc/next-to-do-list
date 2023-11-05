import {updateUserProfile} from "@/utils/utils";

export default function SettingsForm({session}) {


    function handleSubmit(e){
        e.preventDefault();
        const userInfo = {
            email: e.target.elements.email.value,
            name: e.target.elements.name.value
        }
        console.log(session)
        // updateUserProfile(ses)


    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <p className="text-gray-500 text-[15px] tracking-wide font-medium">Email*</p>
                    <input type="text" className="w-full py-3 px-0 text-[14px]" defaultValue={session?.data?.user.email} name="email"/>
                </div>
                <div>
                    <p className="text-gray-500 text-[15px] tracking-wider mt-4 font-medium">Name*</p>
                    <input type="text" className="w-full py-3 px-0 text-[14px]" defaultValue={session?.data?.user.name} name="name"/>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="text-white px-6 py-2 rounded-full bg-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-400 mt-6">Update
                        Settings
                    </button>
                </div>
            </form>
        </>
    )
}