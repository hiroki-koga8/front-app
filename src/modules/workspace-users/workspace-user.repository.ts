import { WorkspaceUser } from "./workspace-user.entity";
import api from "../../lib/api";

export const workspaceUserRepository = {
    async create(
        workspaceId: string,
        userIds: string[],
    ): Promise<WorkspaceUser[]> {
        const result = await api.post(`/workspace-users/${workspaceId}`, {
            userIds,
        })
        return result.data.workspaceUsers.map(
            (workspaceUser: WorkspaceUser) => new WorkspaceUser(workspaceUser)
        )
    }
}