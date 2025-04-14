import { create } from "zustand";

export const useUserStore = create((set) => ({
    users: [],
    loading: false,

    // Actions
    setUsers: (users) => set({ users }),
    setLoading: (loading) => set({ loading }),

    // Fetch all users
    fetchUsers: async () => {
        set({ loading: true });
        try {
            const res = await fetch("/api/admin");
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            set({ users: data.data, loading: false });
        } catch (error) {
            console.error("Error fetching users:", error.message);
            // console.log(error);
            set({ loading: false });
        }
    },
    
    // Create a new user
    createUser: async (newUser) => {
        if (!newUser.name || !newUser.email) {
            return { success: false, message: "Name and email are required." };
        }
        try {
            const res = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            set((state) => ({ users: [...state.users, data.data] }));
            return { success: true, message: "User created successfully." };
        } catch (error) {
            console.error("Error creating user:", error.message);
            return { success: false, message: error.message };
        }
    },

    // Delete a user by ID
    deleteUser: async (userId) => {
        try {
            const res = await fetch(`/api/admin/${userId}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            set((state) => ({
                users: state.users.filter((user) => user._id !== userId),
            }));
            return { success: true, message: "User deleted successfully." };
        } catch (error) {
            console.error("Error deleting user:", error.message);
            return { success: false, message: error.message };
        }
    },

    // Update a user's details
    updateUser: async (userId, updatedUser) => {
        try {
            const res = await fetch(`/api/users/${userId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            set((state) => ({
                users: state.users.map((user) =>
                    user._id === userId ? data.data : user
                ),
            }));
            return { success: true, message: "User updated successfully." };
        } catch (error) {
            console.error("Error updating user:", error.message);
            return { success: false, message: error.message };
        }
    },
}));
