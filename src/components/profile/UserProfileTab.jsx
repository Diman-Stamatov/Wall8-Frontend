import React from "react";
import WalletBalance from "../WalletBalance";
import AuthContext from "../../context/AuthContext";
import { ConfirmDialog } from "../dialogs/ConfirmDialog";
import { useContext } from "react";
import { Link } from "react-router-dom";

function UserProfileTab({ balance }) {

    const { logoutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logoutUser();
        console.log("Logout finished");
    }
    return (
        <div class="mx-auto right-0 mt-2 w-60">
            <div class="dark:bg-light-primary rounded overflow-hidden shadow-lg outline dark:outline-light-tertiary">
                <div class="text-center p-6 dark:bg-dark-primary border-b">
                    <svg aria-hidden="true" role="img" class="h-24 w-24 dark:text-light-primary rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg>
                    <p class="pt-2 text-lg font-semibold dark:text-light-primary">John Doe</p>
                    <p class="text-sm dark:text-light-primary">John@Doe.com</p>
                    <div class="mt-5 ">
                        <Link to="/profile">
                            <button class="hover:dark:bg-dark-secondary border dark:border-light-primary rounded-full dark:bg-dark-primary  py-2 px-4 text-xs font-semibold dark:text-light-primary"
                            >
                                Manage your Account
                            </button>
                        </Link>
                    </div>
                </div>

                <div class="border-b dark:bg-dark-primary">
                    <WalletBalance balance={balance} />
                </div>

                <div class=" dark:bg-dark-primary">
                    <ConfirmDialog
                        buttonName="Logout"
                        title="Confirm Logout"
                        message="Are you sure you want to logout?"
                        onConfirm={handleLogout}
                        onCancel={() => console.log("logout cancelled")}
                    />
                </div>
            </div>
        </div>
    )
}
export default UserProfileTab;