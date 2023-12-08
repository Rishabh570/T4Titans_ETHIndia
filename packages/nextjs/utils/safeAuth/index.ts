import { SafeAuthConfig, SafeAuthInitOptions, SafeAuthPack } from "@safe-global/auth-kit";

const safeAuthInitOptions: SafeAuthInitOptions = {
  enableLogging: true,
  showWidgetButton: false,
  chainConfig: {
    chainId: "11155111",
    rpcTarget: "https://sepolia.infura.io/v3/65f7c212de8546e18a393f3282a6e009",
  },
};

// You can also pass the SafeAuthConfig as a parameter to the SafeAuthPack constructor if you are using a custom txServiceUrl domain
const safeAuthConfig: SafeAuthConfig = {
  txServiceUrl: "https://safe-transaction-mainnet.safe.global",
};
const safeAuthPack = new SafeAuthPack(safeAuthConfig);
await safeAuthPack.init(safeAuthInitOptions);

export { safeAuthPack };

// TODO: Use this when user clicks login
// Move this somewhere else
// The signIn() method returns the user's Ethereum address and the associated Safe addresses
// The `await` will last until the user is authenticated. Therefore, it will be active while the authentication popup is being displayed.
// const authKitSignData = await safeAuthPack.signIn()
