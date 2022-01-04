import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const getRandomInRange = (n) => {
    return Math.floor( Math.random() * n );
}

const getRandomColor = ( delay ) => {
    const currentTime = Date.now();
    let a = 1;
    while ( Date.now() - currentTime < delay ) a++;
    return "rgb(" + getRandomInRange(255) + "," + getRandomInRange(255) + "," + getRandomInRange(255) + ")";
}

const useStyles = makeStyles({
    root: {
        display: "flex",
        gap: "1rem"
    },
    box: {
        width: "5rem",
        height: "5rem"
    }

})

const BlogDisplay = ({
    title,
    body,
    id,
    verify,
    onToggle
}) => {
    const color = getRandomColor(200);
    const styles = useStyles();
    return (
        <Paper className={styles.root}>
            <Container className={styles.box} style={{backgroundColor: color}} ></Container>
            <div>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h5">{body}</Typography>
                <Typography variant="h6">{verify ? "Verified" : "Not Verified"}</Typography>
                <Button onClick={()=>onToggle(id)}>Verify</Button>
            </div>
        </Paper>
    )
};

export default BlogDisplay;
