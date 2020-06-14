import BehaviorTreeStatus from "../BehaviorTreeStatus";
import StateData from "../StateData";

export default interface BehaviorTreeNodeInterface {
    tick(state: StateData, parent: BehaviorTreeNodeInterface): Promise<BehaviorTreeStatus>;
}
