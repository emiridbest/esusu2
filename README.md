## ESUSU

## THIS HACKATHON

- We implemented a referral feature to reward users who tell their friends about our solutions
- This creates an `upliner` and `downliner` relationship
- When a `downliner` makes a deposit,
  - `downliner` earns `1 MST` token
  - `upliner` earns `0.1 MST` token as referral reward

### Summary of Milestone

1. Redifining the reward structure
2. Improving UI/UX
3. Rewriting smart contracts
4. Deploying in foundry as well as verification
5. Writing test for the smart contact
6. Adding user referral reward features
7. Implementig social connect login for Twitter and GitHub

### Overview

ESUSU is a decentralized application (DApp) built on the Celo Mainnet  that facilitates stablecoin contributions through a collective savings model known as Esusu in many African communities. The DApp allows users to create and join campaigns, contribute funds, and track campaign details transparently on the blockchain.

The dApp is a 3 in 1 solution to solving issues related to financial inclusion and poor savings trend. the sectios are

- Esusu thrift contribution => % users joibn a contribution campaign where they pool their funds evrymonth for 5 months . For every month a unique user takes home the total contribution giving everyone access to `bulk money` which naturally the couldnt have saved up. This also elemintaes the need to borrow money for fundung big projects.
- Esusu piggy box => Funds are locked up over time so that users no longer have access to them. They earn `MST` tokens for locking up funds but loss these tokens if the decide to break the lock.
- Esusu pay bills => users can pay for their utility and also make donations to their various projects.

### Technologies Used

- **Frontend**: Next.js, Tailwind CSS, Typescript
- **Backend**: Solidity, Ethereum blockchain
- **Smart Contracts**: Foundry
- **Deployment**: Alfajores(present deployment for the hackathon)
- **Contract Address**: Alfajores 0x68bCc5126a64c699d7aA103F4D27396f6906EaDF
- **Tokens**: `MST` MiniSafe Token as reward for locking up funds for both depositor and the upliner who referred.

### Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/emiridbest/esusu2.git
   ```

2. Install dependencies:

   ```
   yarn install
   ```

3. Start the development server:

   ```
   yarn run dev
   ```

4. Visit `http://localhost:3000` in your browser to view the application.

### Usage

- Create an account or connect your Celo Minipay wallet.
- Go to the `site tester` in minipay
- Enter <http://esusu-two.vercel.app>

- **Esusu Referrers**

1. Connect your social account(GitHub fully implemented)
2. Add `upliner` by entering the `GitHub` username of the user who referred you
3. Go ahead to make a deposit

### Architecture in the `react-app` folder

    /pages includes the main application components (specifically index.tsx and _app.tsx)
        _app.tsx includes configuration
        index.tsx is the main page of the application
    /components includes components that are rendered in index.tsx
        Balance.tsx to return your `cUSD` wallet balance
        SocialProfile.tsx to return profile details of the connected user
        SocialConnectUI.tsx to signIn, signOut of sessions amd also `register`and `revoke` identifiers
        TransactionList.tsx to return transaction history on `cUSD` tokens of the connected user
    /SocialConnect includes helper files
        /abis hold contractABI for various socialConnect protocol
    /public includes static files
    /utils
        abi.ts hold smart contract's `ABI and `Address` of the `timelock` and `referral` features logic
        esusu.ts hold `ABI and `Address` of the `thrift` feature logic
        pay.ts hold `ABI and `Address` of the `utilityBills` payment feature logic

### Contributing

Contributions are welcome! Please follow the standard GitHub flow:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/<feature-name>`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/<feature-name>`)
6. Create a new Pull Request

### License

This project is licensed under the [MIT License](LICENSE).
