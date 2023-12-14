import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories"

const RepositoryList = () => {
    console.log(repositories);
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent = {() => <Text> </Text> }
            renderItem = {({ item: repository}) => (    
                <View key={repository.id}>
                    <Text>Id: {repository.id} </Text>
                    <Text>Full Name: {repository.fullName}</Text>
                    <Text>Language: {repository.language}</Text>
                    <Text>Forks: {repository.forksCount}</Text>
                    <Text>Stars: {repository.stargazersCount}</Text>
                    <Text>Rating: {repository.ratingAverage}</Text>
                    <Text>Reviews: {repository.reviewCount}</Text>
                </View>
            )}
        />
    )
}

export default RepositoryList