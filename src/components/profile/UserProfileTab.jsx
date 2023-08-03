import React from "react";
import WalletBalance from "../WalletBalance";

function UserProfileTab({balance}) {
    return (
<div class="mx-auto right-0 mt-2 w-60">
                <div class="bg-white rounded overflow-hidden shadow-lg">
                    <div class="text-center p-6 bg-gray-800 border-b">
                    <svg aria-hidden="true" role="img" class="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg>
                    <p class="pt-2 text-lg font-semibold text-gray-50">John Doe</p>
                    <p class="text-sm text-gray-100">John@Doe.com</p>
                    <div class="mt-5">
                        <a
                        class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                        Manage your Account
                        </a>
                    </div>
                    </div>
                    <div class="border-b">
                        <WalletBalance balance={balance} />
                    </div>

                    <div class="">
                        <button href="#" class="flex justify-center w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
                            <p class="text-sm font-medium text-red-500 leading-none"> Logout </p>
                        </button>
                    </div>
                </div>
            </div>
    )
}
export default UserProfileTab;