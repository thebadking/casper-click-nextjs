import { CLPublicKey, DeployUtil } from 'casper-js-sdk';

export default function makeTransferDeploy(
	senderPublicKeyHex: string | null,
	recipientPublicKeyHex: string,
	amountMotes: string,
	chainName: string
) {
	const senderPublicKey = CLPublicKey.fromHex(senderPublicKeyHex?.toLowerCase() || '');
	const recipientPublicKey = CLPublicKey.fromHex(recipientPublicKeyHex);

	const deployParams = new DeployUtil.DeployParams(senderPublicKey, chainName);

	const session = DeployUtil.ExecutableDeployItem.newTransfer(
		amountMotes,
		recipientPublicKey,
		undefined,
		'1' // transfer id
	);

	const payment = DeployUtil.standardPayment('100000000');

	const deploy = DeployUtil.makeDeploy(deployParams, session, payment);
	return JSON.stringify(DeployUtil.deployToJson(deploy).deploy);
}
